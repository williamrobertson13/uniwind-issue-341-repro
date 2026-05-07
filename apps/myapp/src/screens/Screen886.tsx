import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy886 } from '../generated/copy/copy886';
import { layout886 } from '../generated/layouts/layout886';
import { palette886 } from '../generated/palettes/palette886';

const RuntimeView886 = withUniwind(View);

export function Screen886() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView886 styleClassName={layout886.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy886.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy886.detail} / {palette886.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
