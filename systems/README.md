# Publish-SystemsKit
Design systems kit를 토대로 템플릿 스타일 코드(공통으로 쓰이는 퍼블리싱 작업)을 정의한 레파지토리 입니다.

## 폴더 및 파일 설명
* style 폴더
	* systems.min.css
	  * 기존 normalize.css, common.css + 템플릿 스타일 코드
	  * 네이밍 기법 : BEM(block-name__element-name--modifier-name)방법론
  * index.css
    * 각 프로젝트 맞춤 layout 코드(body, header, footer, top 등 공통적인 레이아웃)
    * 네이밍 기법 : Snake(element_name) 케이스
  * main.css
    * 각 프로젝트 메인 페이지 스타일 코드
    * 네이밍 기법 : Snake(element_name) 케이스
  * sub.css
    * 각 프로젝트 메인 페이지 스타일 코드
    * 네이밍 기법 : Snake(element_name) 케이스
