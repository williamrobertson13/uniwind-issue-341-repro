import { Pressable, Text, View } from 'react-native';

import { copy342 } from '../generated/copy/copy342';
import { layout342 } from '../generated/layouts/layout342';
import { palette342 } from '../generated/palettes/palette342';

export function Screen342() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout342.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy342.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy342.detail} / {palette342.name}
			</Text>
		</View>
	);
}
