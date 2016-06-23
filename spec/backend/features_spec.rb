feature 'quick capybara rspec setup test' do

  scenario 'page should contain content' do
    visit('/')
    expect(page).to have_content("Thermostat")
  end

end
