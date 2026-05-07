import { Pressable, Text, View } from 'react-native';

import { copy810 } from '../generated/copy/copy810';
import { layout810 } from '../generated/layouts/layout810';
import { palette810 } from '../generated/palettes/palette810';

export function Screen810() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout810.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy810.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy810.detail} / {palette810.name}
			</Text>
		</View>
	);
}
