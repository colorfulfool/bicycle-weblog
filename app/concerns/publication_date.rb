module PublicationDate
  included do
    delegate :language, to: :content
  end
  
  def publication_date
    I18n.with_locale(language) do
      I18n.localize(created_at, format: "%-d %B %Y")
    end
  end
end