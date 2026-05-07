import { Pressable, Text, View } from 'react-native';

import { copy231 } from '../generated/copy/copy231';
import { layout231 } from '../generated/layouts/layout231';
import { palette231 } from '../generated/palettes/palette231';

export function Screen231() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout231.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy231.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy231.detail} / {palette231.name}
			</Text>
		</View>
	);
}
