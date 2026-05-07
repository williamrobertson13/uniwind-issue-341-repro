import { Pressable, Text, View } from 'react-native';

import { copy278 } from '../generated/copy/copy278';
import { layout278 } from '../generated/layouts/layout278';
import { palette278 } from '../generated/palettes/palette278';

export function Screen278() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout278.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy278.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy278.detail} / {palette278.name}
			</Text>
		</View>
	);
}
