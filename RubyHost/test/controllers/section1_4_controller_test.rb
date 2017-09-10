require 'test_helper'

class Section14ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section1_4_index_url
    assert_response :success
  end

end
