import { Pressable, Text, View } from 'react-native';

import { copy351 } from '../generated/copy/copy351';
import { layout351 } from '../generated/layouts/layout351';
import { palette351 } from '../generated/palettes/palette351';

export function Screen351() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout351.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy351.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy351.detail} / {palette351.name}
			</Text>
		</View>
	);
}
