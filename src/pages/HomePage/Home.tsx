import React, { useEffect, useRef } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from './HomePage.module.css';

import { SVGAttributes } from 'react';

function Home() {
  const h1Ref = useRef(null);
  const divRef = useRef(null);
  // const svgRef = useRef<SVGSVGElement | null>(null);
  // const pathRef = useRef<SVGPathElement | null>(null);

  // useEffect(() => {
  //   if (pathRef.current) {
  //     const length = pathRef.current.getTotalLength();
  //     console.log(length);
  //   }
  // }, []);

  return (
    <>
      <div className={styles['welcome-page']}>
        <div className={styles['welcome-text']}>
          <h1 ref={h1Ref} className={styles['fadeInScale']}>
            Virtual Art Gallery
          </h1>
          <div ref={divRef} className={styles['typingWelcome']}>
            <svg
              width="417"
              height="172"
              viewBox="0 0 417 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.12278 17.3712C5.12278 30.8464 4.84652 44.3547 5.12278 57.8256C5.33307 68.0797 8.55529 77.7479 10.6176 87.682C12.2946 95.7599 12.9646 104.037 14.7248 112.069C17.8047 126.121 21.2041 139.517 31.3203 149.902C35.6894 154.387 41.1287 163.529 47.5828 165.001C49.723 165.489 53.7469 141.351 54.5207 138.734C60.2891 119.227 64.6203 98.906 66.0653 78.5086C67.2194 62.2184 69.3787 45.863 70.8386 29.5645C71.0954 26.6975 71.0606 23.8351 71.0606 20.9608C71.0606 18.7038 69.5424 17.3986 69.118 20.448C67.8056 29.8791 67.8344 39.5346 68.563 49.1079C70.2203 70.8852 69.8992 92.8533 70.0616 114.69C70.1768 130.191 71.4905 144.296 83.0493 155.315C85.9137 158.045 90.736 159.095 94.816 157.651C115.818 150.216 113.598 120.413 114.575 103.066C115.345 89.4073 115.103 75.2125 117.239 61.7001C119.206 49.2629 121.937 36.9709 124.011 24.5505C124.96 18.8648 127.008 12.9081 127.008 7.1152C127.008 4.04387 126.509 7.29945 126.009 8.71058C122.19 19.492 123.108 33.3457 123.012 44.4927C122.851 63.1073 123.79 81.6484 124.011 100.217C124.104 108.11 121.986 120.282 132.392 121.926C137.356 122.71 141.72 121.85 144.991 117.652C149.452 111.928 154.623 99.1653 148.432 92.81C137.427 81.5127 123.832 110.158 121.569 116.798C119.267 123.547 121.405 133.348 125.01 139.19C128.654 145.097 130.917 151.973 137.942 153.776C141.647 154.727 144.624 158.167 147.988 159.702C153.206 162.083 160.765 151.118 163.418 148.136C171.044 139.561 175.625 126.956 179.514 116.285C183.734 104.705 188.851 92.5928 191.392 80.5028C193.848 68.8099 194.996 56.9832 197.83 45.3474C199.56 38.2418 199.939 30.8215 199.939 23.5248C199.939 19.5775 201.77 10.1911 198.94 7.1152C194.969 2.79847 190.124 5.90903 186.951 9.16641C184.872 11.3015 185.303 12.276 184.731 14.9782C182.712 24.5147 179.867 34.2895 176.961 43.5811C171.024 62.5602 167.834 81.4689 171.466 101.357C173.661 113.376 172.965 125.638 172.965 137.823C172.965 140.678 174.397 144.655 177.183 145.8C188.36 150.389 195.633 162.97 207.932 165.856C212.451 166.916 216.573 161.86 219.92 159.474C226.125 155.051 231.681 150.09 236.405 143.976C242.781 135.723 243.898 123.747 243.898 113.55C243.898 105.94 236.618 102.293 229.911 101.528C221.536 100.572 218.928 110.566 216.923 116.855C213.927 126.253 211.174 142.897 214.925 152.523C217.86 160.056 226.677 163.239 233.852 163.975C239.669 164.573 245.174 165.058 251.113 165.058C260.485 165.058 269.925 153.817 277.311 148.762C281.595 145.83 283.86 145.692 283.86 140.216C283.86 132.429 283.86 124.642 283.86 116.855C283.86 112.114 284.18 99.636 279.253 96.9124C271.602 92.6829 263.464 102.675 260.105 108.422C256.144 115.199 253.388 128.216 256.441 135.828C259.289 142.928 261.323 148.136 265.933 154.346C268.406 157.678 270.568 159.06 274.646 158.904C277.168 158.809 278.423 154.945 279.309 153.15C284.854 141.907 289.763 129.768 291.408 117.197C292.196 111.185 289.608 86.9133 297.347 104.206C301.408 113.278 305.251 122.331 308.059 131.897C308.331 132.82 314.232 153.635 316.607 153.093C317.513 152.886 316.79 151.196 316.829 150.244C317.005 145.932 317.103 143.846 317.717 139.304C318.874 130.737 320.612 122.094 323.323 113.892C323.502 113.349 328.333 100.98 329.262 103.978C331.306 110.574 327.482 162.286 344.026 156.625C347.96 155.279 351.432 148.109 353.517 145.173C358.081 138.742 366.812 127.87 365.727 118.963C365.052 113.418 360.974 106.752 356.569 103.522C351.331 99.6806 345.802 98.7737 345.802 106.713C345.802 119.36 344.447 132.802 346.024 145.344C346.556 149.578 346.559 163.461 353.295 161.924C356.946 161.091 360.493 159.009 364.229 158.107C368.633 157.043 374.336 157.257 378.826 156.796C383.554 156.311 387.986 155.828 392.757 155.828C398.898 155.828 416.881 159.93 410.74 159.93"
                stroke="url(#paint0_linear_1_22)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_22"
                  x1="5.00001"
                  y1="22"
                  x2="469"
                  y2="166"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60BC79" />
                  <stop offset="0.527793" stopColor="#BC6060" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default Home;
