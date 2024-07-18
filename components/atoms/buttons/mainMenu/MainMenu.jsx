import React from 'react'
import Link from 'next/link'
import "./mainMenu.css"
export default function MainMenu({ setVideo }) {
    return (
        <div className="wrapper">
            <input type="checkbox" id="toggle" className="hidden-trigger" />
            <label htmlFor="toggle" className="circle animate-pulse">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" xmlSpace="preserve" version="1.1" viewBox="0 0 48 48">
                    <image width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAbElEQVR4Ae3XwQnFQAiE4eVVsGAP1mkPFjwvQvYSWCQYCYGZv4Dv5MGB5ghcIiDQI+kCftCzNsAR8y5gYu2rwCBAgMBTgEC3rek2yQEtAZoDjso8AyaKexmIDJUZD40AAQIE0gwx449GgMC9/t0b7GTsa7J+AAAAAElFTkSuQmCC"></image>
                </svg>
            </label>

            <div className="subs">
                <a href="/request" className="sub-circle text-xs text-black font-semibold">
                    کارشناسی
                </a>
                <a href="https://melkevtap.ir/files" className="sub-circle text-xs text-black font-semibold">
                    آگهی ها
                </a>
                <a onc className="sub-circle text-xs text-black font-semibold">
                    استعلام
                </a>
                <a href="/experts" className="sub-circle text-xs text-black font-semibold">
                    کارشناسان
                </a>
                <a onClick={() => setVideo(true)} className="sub-circle text-xs text-black font-semibold cursor-pointer">
                    درباره ما
                </a>
                <a href="https://melkevtap.ir/contact-us" className="sub-circle text-xs text-black font-semibold">
                    تماس با ما
                </a>
                <a href="https://melkevtap.ir/blog" className="sub-circle text-xs text-black font-semibold">
                    وبلاگ
                </a>
                <a href="/profile" className="sub-circle text-xs text-black font-semibold">
                    ورود
                </a>
            </div>
        </div>
    )
}
