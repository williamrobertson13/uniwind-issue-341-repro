import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy261 } from '../generated/copy/copy261';
import { layout261 } from '../generated/layouts/layout261';
import { palette261 } from '../generated/palettes/palette261';

const RuntimeView261 = withUniwind(View);

export function Screen261() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView261 styleClassName={layout261.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy261.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy261.detail} / {palette261.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
