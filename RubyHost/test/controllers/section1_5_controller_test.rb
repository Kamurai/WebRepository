require 'test_helper'

class Section15ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section1_5_index_url
    assert_response :success
  end

end
