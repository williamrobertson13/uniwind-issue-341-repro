import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy645 } from '../generated/copy/copy645';
import { layout645 } from '../generated/layouts/layout645';
import { palette645 } from '../generated/palettes/palette645';

const RuntimeView645 = withUniwind(View);

export function Screen645() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView645 styleClassName={layout645.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy645.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy645.detail} / {palette645.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
