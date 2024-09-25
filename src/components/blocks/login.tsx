import React from 'react'

export default function login() {
  return (
                            <div className="">
                                <div className="shadow-dark-sm">
                                    <h5 className="ath-heading title">Sign in <small className="tc-default">with your ICO Account</small></h5>
                                    <form action="./">
                                        <div className="field-item">
                                            <div className="field-wrap">
                                                <input type="text" className="input-bordered" placeholder="Your Email"/>
                                            </div>
                                        </div>
                                        <div className="field-item">
                                            <div className="field-wrap">
                                                <input type="password" className="input-bordered" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="field-item d-flex justify-content-between align-items-center">
                                            <div className="field-wrap">
                                                <input className="input-checkbox" id="remember-me" type="checkbox"/>
                                                <label>Remember Me</label>
                                            </div>
                                            <div className="forget-link fz-6">
                                                <a href="#">Forgot password?</a>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-md">Sign In</button>
                                    </form>
                                    <div className="sap-text"><span>Or Sign In With</span></div>
                                    <ul className="row gutter-20px gutter-vr-20px">
                                        <li className="col"><a href="#" className="btn btn-md btn-facebook btn-block"><em className="icon fab fa-facebook-f"></em><span>Facebook</span></a></li>
                                        <li className="col"><a href="#" className="btn btn-md btn-google btn-block"><em className="icon fab fa-google"></em><span>Google</span></a></li>
                                    </ul>
                                </div>
                                <div className="ath-note text-center"> Don’t have an account? <a href="page-register.html"> <strong>Sign up here</strong></a>
                                </div>
                            </div>
  )
}
