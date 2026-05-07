import { Pressable, Text, View } from 'react-native';

import { copy266 } from '../generated/copy/copy266';
import { layout266 } from '../generated/layouts/layout266';
import { palette266 } from '../generated/palettes/palette266';

export function Screen266() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout266.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy266.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy266.detail} / {palette266.name}
			</Text>
		</View>
	);
}
