import Link from 'next/link'
import React from 'react'

export default function Blogs() {
    return (
        <div className="text-3xl font-bold" > Blogs Page
            <Link href={`/blogs/blog/${1}`}>Go To blog number {1}</Link>
        </div>
    )
}
