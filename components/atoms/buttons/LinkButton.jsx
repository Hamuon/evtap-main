import React from 'react'
import Link from 'next/link'
export default function LinkButton({ children, className, href }) {
    return (
        <Link className={className} href={href}>
            <button>
                {children}
            </button>
        </Link>
    )
}
