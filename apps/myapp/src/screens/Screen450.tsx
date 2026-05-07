import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy450 } from '../generated/copy/copy450';
import { layout450 } from '../generated/layouts/layout450';
import { palette450 } from '../generated/palettes/palette450';

const RuntimeView450 = withUniwind(View);

export function Screen450() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView450 styleClassName={layout450.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy450.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy450.detail} / {palette450.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
