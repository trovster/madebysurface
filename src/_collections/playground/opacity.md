---
order: 2
title: Logo Opacity
bodyClass: playground playground--opacity
---
<div class="controls">
    <div>
        <input class="opacity" type="range" min="0" max="100" value="0" step="10" />
        <p>Opacity: <output name="opacity" class="opacity">0</output></p>
    </div>
</div>

<script type="text/javascript">
    const paths = document.querySelectorAll('.logo path')
    const opacity = document.querySelector('input.opacity')

    opacity.addEventListener('input', (event) => {
        const value = event.target.value

        paths.forEach((path) => {
            path.style.setProperty('--opacity', `${value}%`)
        })

        document.querySelector('output.opacity').innerHTML = value;
    })
</script>
