import { Pressable, Text, View } from 'react-native';

import { copy61 } from '../generated/copy/copy61';
import { layout61 } from '../generated/layouts/layout61';
import { palette61 } from '../generated/palettes/palette61';

export function Screen61() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout61.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy61.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy61.detail} / {palette61.name}
			</Text>
		</View>
	);
}
