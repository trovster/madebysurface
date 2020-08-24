---
order: 4
title: Logo Cursor
enabled: true
bodyClass: playground playground--cursor
---
<script type="text/javascript">
    const offset = 40
    const cursor = document.querySelector('.logo .cursor')
    const rects = cursor.getClientRects()[0]
    const boxCenter = [
        rects.x + rects.width / 2,
        rects.y + rects.height / 2
    ]

    window.addEventListener('mousemove', (event) => {
        const angle = Math.atan2(
            event.pageX - boxCenter[0], - (event.pageY - boxCenter[1])
        ) * (180 / Math.PI)

        cursor.style.setProperty('--angle', `${angle - offset}deg`)
    })
</script>
