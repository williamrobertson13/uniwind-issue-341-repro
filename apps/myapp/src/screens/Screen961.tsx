import { Pressable, Text, View } from 'react-native';

import { copy961 } from '../generated/copy/copy961';
import { layout961 } from '../generated/layouts/layout961';
import { palette961 } from '../generated/palettes/palette961';

export function Screen961() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout961.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy961.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy961.detail} / {palette961.name}
			</Text>
		</View>
	);
}
