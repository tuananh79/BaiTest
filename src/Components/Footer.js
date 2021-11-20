import React from "react";
import './fooTer.scss';
import n from '../assets/images/snsicon-01.png';
import fb from '../assets/images/snsicon-02.png';
import bl from '../assets/images/snsicon-03.png';
class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer grid wide  no-gutters">
                    <div className="row">
                        <div className="whath  ">
                            <h1>what happend</h1>
                            <a>[공지] 개인 정보 처리 방침 변경 사전 안내</a><br />
                            <a> [공지] 29CM 강남 스토어 영업 종료</a><br />
                            <a>  [공지] 개인 정보 처리 방침 변경 사전 안내</a><br />
                            <a> [공지] iOS 10 이하 버전 지원 중단 안내</a><br />
                            <a>  [공지] 개인 정보 처리 방침 변경 사전 안내</a><br />
                        </div>
                        <div className="info row  no-gutters">
                            <div className="about if">
                                <h1>about us</h1>
                                <a>회사 소개</a><br />
                                <a> 인재 채용</a><br />
                                <a> 상시 할인 혜택</a><br />
                            </div>
                            <div className="order if">
                                <h1>my order</h1>
                                <a> 내 주문</a><br />
                                <a>주문 배송</a><br />
                                <a>취소 / 교환 / 반품 내역</a><br />
                                <a>상품 리뷰 내역</a><br />
                                <a>증빙 서류 발급</a><br />
                            </div>
                            <div className="account if">
                                <h1>my account</h1>
                                <a> 회원 정보 수정</a><br />
                                <a>회원 등급</a><br />
                                <a>마일리지 현황</a><br />
                                <a>쿠폰</a><br />
                            </div>
                            <div className="help if">
                                <h1>help</h1>
                                <a>1 : 1 상담 내역</a><br />
                                <a>상품 Q & A 내역</a><br />
                                <a>공지 사항</a><br />
                                <a>자주하는 질문</a><br />
                                <a>고객의 소리</a><br />
                            </div>
                        </div>

                    </div>
                    <div className="dat">
                        <div className="copyright">
                            <label>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                                서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</label>
                        </div>
                        <div className="icon">
                            <img src={n} alt="" />
                            <img src={fb} alt="" />
                            <img src={bl} alt="" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Footer;