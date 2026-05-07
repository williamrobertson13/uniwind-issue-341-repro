import { Pressable, Text, View } from 'react-native';

import { copy710 } from '../generated/copy/copy710';
import { layout710 } from '../generated/layouts/layout710';
import { palette710 } from '../generated/palettes/palette710';

export function Screen710() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout710.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy710.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy710.detail} / {palette710.name}
			</Text>
		</View>
	);
}
