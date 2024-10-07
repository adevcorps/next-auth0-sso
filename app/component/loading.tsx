'use client'
export function LoadingSpin() {
    return (
        <div className="absolute z-[40] bg-[#f2f2f2f2] bg-opacity-95 h-full w-full flex justify-center pt-[20rem]">
                {/* <span className="text-3xl mr-4">Loading</span> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24">
                    <g stroke="#0D0040">
                        <circle cx="12" cy="12" r="9.5" fill="none" strokeLinecap="round" strokeWidth="1.55">
                            <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.2s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
                            <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.2s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
                        </circle>
                        <animateTransform attributeName="transform" dur="1.6s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                    </g>
                </svg>
        </div>
    )
}