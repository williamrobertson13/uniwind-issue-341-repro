import { Pressable, Text, View } from 'react-native';

import { copy22 } from '../generated/copy/copy22';
import { layout22 } from '../generated/layouts/layout22';
import { palette22 } from '../generated/palettes/palette22';

export function Screen22() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout22.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy22.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy22.detail} / {palette22.name}
			</Text>
		</View>
	);
}
