import { Pressable, Text, View } from 'react-native';

import { copy70 } from '../generated/copy/copy70';
import { layout70 } from '../generated/layouts/layout70';
import { palette70 } from '../generated/palettes/palette70';

export function Screen70() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout70.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy70.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy70.detail} / {palette70.name}
			</Text>
		</View>
	);
}
