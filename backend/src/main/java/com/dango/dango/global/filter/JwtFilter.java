package com.dango.dango.global.filter;

import java.io.IOException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.dango.dango.global.common.util.JwtTokenUtil;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
	private final UserDetailsService userDetailsService;
	private final JwtTokenUtil jwtTokenUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {
		String token = jwtTokenUtil.extractToken(request);
		if(token != null){
			try{
				if(jwtTokenUtil.validateToken(token)){
					Claims claims = jwtTokenUtil.extractClaims(token);
					String username = (String)claims.get("username");
					request.setAttribute("username",username);
					UserDetails userDetails = userDetailsService.loadUserByUsername(username);
					Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails.getUsername(),userDetails.getPassword(),userDetails.getAuthorities());
					SecurityContextHolder.getContext().setAuthentication(authentication);
				}else{
					throw new IllegalArgumentException("유효하지 않은 토큰입니다");
				}
			}catch (IllegalArgumentException e){
				response.setHeader("Expired-Token","true");
				//토큰의 기간이 만료되었음을 알려주자
			}
		}
		filterChain.doFilter(request,response);
	}
}
