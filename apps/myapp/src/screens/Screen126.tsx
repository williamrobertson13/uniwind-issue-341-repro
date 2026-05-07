import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy126 } from '../generated/copy/copy126';
import { layout126 } from '../generated/layouts/layout126';
import { palette126 } from '../generated/palettes/palette126';

const RuntimeView126 = withUniwind(View);

export function Screen126() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView126 styleClassName={layout126.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy126.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy126.detail} / {palette126.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
