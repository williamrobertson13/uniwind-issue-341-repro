import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy973 } from '../generated/copy/copy973';
import { layout973 } from '../generated/layouts/layout973';
import { palette973 } from '../generated/palettes/palette973';

const RuntimeView973 = withUniwind(View);

export function Screen973() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView973 styleClassName={layout973.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy973.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy973.detail} / {palette973.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
