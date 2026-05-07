import { Pressable, Text, View } from 'react-native';

import { copy670 } from '../generated/copy/copy670';
import { layout670 } from '../generated/layouts/layout670';
import { palette670 } from '../generated/palettes/palette670';

export function Screen670() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout670.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy670.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy670.detail} / {palette670.name}
			</Text>
		</View>
	);
}
