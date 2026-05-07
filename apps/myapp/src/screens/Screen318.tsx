import { Pressable, Text, View } from 'react-native';

import { copy318 } from '../generated/copy/copy318';
import { layout318 } from '../generated/layouts/layout318';
import { palette318 } from '../generated/palettes/palette318';

export function Screen318() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout318.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy318.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy318.detail} / {palette318.name}
			</Text>
		</View>
	);
}
