import { Pressable, Text, View } from 'react-native';

import { copy727 } from '../generated/copy/copy727';
import { layout727 } from '../generated/layouts/layout727';
import { palette727 } from '../generated/palettes/palette727';

export function Screen727() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout727.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy727.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy727.detail} / {palette727.name}
			</Text>
		</View>
	);
}
