import React from 'react'

import styles from './styles.module.css'

export const GitHubShareButton: React.FC = () => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='View source on GitHub'
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 250 250'
        style={{
          fill: '#70B7FD',
          color: '#fff',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden='true'
      >
        <path d='' />
        <path
          d=''
          fill='currentColor'
          style={{
            transformOrigin: '130px 106px'
          }}
          className={styles.octoArm}
        />

        <path
          d=''
          className={styles.octoBody}
        />
      </svg>
    </a>
  )
}
