require 'test_helper'

class Section12ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section1_2_index_url
    assert_response :success
  end

end
