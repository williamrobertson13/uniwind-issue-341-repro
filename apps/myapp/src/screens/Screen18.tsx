import { Pressable, Text, View } from 'react-native';

import { copy18 } from '../generated/copy/copy18';
import { layout18 } from '../generated/layouts/layout18';
import { palette18 } from '../generated/palettes/palette18';

export function Screen18() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout18.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy18.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy18.detail} / {palette18.name}
			</Text>
		</View>
	);
}
