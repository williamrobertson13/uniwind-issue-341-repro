import { Pressable, Text, View } from 'react-native';

import { copy639 } from '../generated/copy/copy639';
import { layout639 } from '../generated/layouts/layout639';
import { palette639 } from '../generated/palettes/palette639';

export function Screen639() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout639.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy639.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy639.detail} / {palette639.name}
			</Text>
		</View>
	);
}
