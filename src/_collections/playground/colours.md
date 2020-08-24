---
order: 3
title: Logo Colours
enabled: true
bodyClass: playground playground--colours
---
<div class="controls">
    <ul>
        <li><input type="color" name="s" value="#05668D" /></li>
        <li><input type="color" name="u" value="#04738F" /></li>
        <li><input type="color" name="r" value="#028090" /></li>
        <li><input type="color" name="f" value="#019493" /></li>
        <li><input type="color" name="a" value="#00A896" /></li>
        <li><input type="color" name="c" value="#01B698" /></li>
        <li><input type="color" name="e" value="#02C39A" /></li>
    </ul>
</div>

<script type="text/javascript">
    const buttons = document.querySelectorAll('input[type="color"]')

    buttons.forEach((button) => {
        button.addEventListener('input', (event) => {
            const value = event.target.value
            const color = event.target.name

            document.body.style.setProperty(`--color-${color}`, value)
        })
    })
</script>
