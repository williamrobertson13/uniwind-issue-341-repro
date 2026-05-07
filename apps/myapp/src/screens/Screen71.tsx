import { Pressable, Text, View } from 'react-native';

import { copy71 } from '../generated/copy/copy71';
import { layout71 } from '../generated/layouts/layout71';
import { palette71 } from '../generated/palettes/palette71';

export function Screen71() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout71.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy71.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy71.detail} / {palette71.name}
			</Text>
		</View>
	);
}
