require 'test_helper'

class Section1ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section1_index_url
    assert_response :success
  end

end
