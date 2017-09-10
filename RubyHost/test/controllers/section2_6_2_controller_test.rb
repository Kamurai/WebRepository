require 'test_helper'

class Section262ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_6_2_index_url
    assert_response :success
  end

end
