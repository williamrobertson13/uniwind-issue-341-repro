import { Pressable, Text, View } from 'react-native';

import { copy946 } from '../generated/copy/copy946';
import { layout946 } from '../generated/layouts/layout946';
import { palette946 } from '../generated/palettes/palette946';

export function Screen946() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout946.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy946.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy946.detail} / {palette946.name}
			</Text>
		</View>
	);
}
