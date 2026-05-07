import { Pressable, Text, View } from 'react-native';

import { copy447 } from '../generated/copy/copy447';
import { layout447 } from '../generated/layouts/layout447';
import { palette447 } from '../generated/palettes/palette447';

export function Screen447() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout447.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy447.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy447.detail} / {palette447.name}
			</Text>
		</View>
	);
}
