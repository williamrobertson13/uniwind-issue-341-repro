import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy558 } from '../generated/copy/copy558';
import { layout558 } from '../generated/layouts/layout558';
import { palette558 } from '../generated/palettes/palette558';

const RuntimeView558 = withUniwind(View);

export function Screen558() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView558 styleClassName={layout558.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy558.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy558.detail} / {palette558.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
