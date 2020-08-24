---
order: 1
title: Logo Stroke
enabled: true
bodyClass: playground playground--stroke
---
<div class="controls">
    <div>
        <input class="stroke" type="range" min="1" max="50" value="1" />
        <p>Stroke: <output name="stroke" class="stroke">1</output></p>
    </div>
</div>

<script type="text/javascript">
    const paths = document.querySelectorAll('.logo path')
    const stroke = document.querySelector('input.stroke')

    stroke.addEventListener('input', (event) => {
        const value = event.target.value

        paths.forEach((path) => {
            path.style.setProperty('--stroke', value)
        })

        document.querySelector('output.stroke').innerHTML = value;
    })
</script>
