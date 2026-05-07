import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy86 } from '../generated/copy/copy86';
import { layout86 } from '../generated/layouts/layout86';
import { palette86 } from '../generated/palettes/palette86';

const RuntimeView86 = withUniwind(View);

export function Screen86() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView86 styleClassName={layout86.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy86.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy86.detail} / {palette86.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
