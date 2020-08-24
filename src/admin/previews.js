/* global CMS, h, createClass */
const TestimonialPreview = createClass({
  render: function () {
    const entry = this.props.entry
    const author = entry.getIn(['data', 'author'])
    const company = entry.getIn(['data', 'org'])

    return h('div', { className: 'testimonial' },
      h('blockquote', {}, this.props.widgetFor('body')),
      h('p', {},
        h('cite', { className: 'vcard' },
          h('span', { className: 'fn author' }, company ? `${author}, ` : author),
          h('span', { className: 'org' }, company || '')
        )
      )
    )
  }
})

const ExpertisePreview = createClass({
  render: function () {
    const entry = this.props.entry
    const title = entry.getIn(['data', 'title'])

    return h('div', { className: 'expertise' },
      h('h2', {}, title),
      h('div', {}, this.props.widgetFor('body'))
    )
  }
})

CMS.registerPreviewTemplate('testimonials', TestimonialPreview)
CMS.registerPreviewTemplate('expertise', ExpertisePreview)
