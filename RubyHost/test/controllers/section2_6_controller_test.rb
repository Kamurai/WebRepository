require 'test_helper'

class Section26ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_6_index_url
    assert_response :success
  end

end
