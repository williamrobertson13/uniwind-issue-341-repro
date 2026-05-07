import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy573 } from '../generated/copy/copy573';
import { layout573 } from '../generated/layouts/layout573';
import { palette573 } from '../generated/palettes/palette573';

const RuntimeView573 = withUniwind(View);

export function Screen573() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView573 styleClassName={layout573.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy573.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy573.detail} / {palette573.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
