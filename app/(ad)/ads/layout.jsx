import React from 'react'
import AdFooter from '@/components/organisms/footer/AdFooter'
import AdNavigation from '@/components/organisms/navigation/AdNavigation'
export default function layout({ children }) {
    return (
        <html lang="fa" dir='rtl'>
            <body>
                <AdNavigation />
                {children}
                <AdFooter />
            </body>
        </html>
    )
}
