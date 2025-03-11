export const Icons = {
    arrow: (props: React.SVGProps<SVGSVGElement>) => (
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path 
                d="M6 18L18 6M18 6H10M18 6V14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
    ),
    copy: (props: React.SVGProps<SVGSVGElement>) => (
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path 
                d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),
    chevron_left: (props: React.SVGProps<SVGSVGElement>) => (
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),
    copy_2: (props: React.SVGProps<SVGSVGElement>) => (
        <svg 
            aria-hidden="true" 
            fill="none" 
            focusable="false"
            role="presentation" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path 
                d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z">
            </path>
            <path 
                d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16">
            </path>
            <path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
        </svg>
    ),
    check: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        role="presentation"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    book_open: (props: React.SVGProps<SVGSVGElement>) => (
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
        <path 
            d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        </svg>
    )
}